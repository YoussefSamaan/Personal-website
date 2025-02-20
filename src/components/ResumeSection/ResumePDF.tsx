import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from "@react-pdf/renderer";

// Register the Open Sans font
Font.register({
  family: "Open Sans",
  src: "https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVQUwaEQbjB_mQ.woff"
});

// Define styles that mimic the referenced resume design.
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Open Sans",
    fontSize: 10,
    lineHeight: 1.3
  },
  header: {
    textAlign: "center",
    marginBottom: 20
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b", // slate-800
    marginBottom: 5
  },
  contact: {
    fontSize: 10,
    color: "#666"
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1e40af", // blue-900 accent
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
    paddingBottom: 4
  },
  timelineItem: {
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: "bold"
  },
  company: {
    fontSize: 9,
    color: "#475569"
  },
  date: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 4
  },
  bullet: {
    fontSize: 9,
    marginLeft: 10,
    marginBottom: 2
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginBottom: 8
  },
  tag: {
    fontSize: 9,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5
  },
  subSectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 4
  }
});

// This component assumes a JSON structure similar to:
interface ResumeJson {
  education?: any[];
  work?: any[];
  research?: any[];
  project?: any[];
  "Tools & Frameworks"?: string[];
  "Languages"?: string[];
  "Other Technologies"?: string[];
  "Tools"?: string[];
  "Libraries"?: string[];
  award?: string[];
  hobby?: string[];
}

interface ResumePDFProps {
  resumeJson: ResumeJson;
}

export function ResumePDF({ resumeJson }: ResumePDFProps) {
  // Helper to render timeline-style sections (Education, Work, Research, Projects)
  const renderTimelineSection = (sectionData: any[]) =>
      sectionData.map((item, idx) => {
        // Prefer 'resumeItem' if available, otherwise use 'description'
        const details =
            item.resumeItem && item.resumeItem.length > 0
                ? item.resumeItem
                : item.description;
        return (
            <View key={idx} style={styles.timelineItem}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.organization && (
                  <Text style={styles.company}>
                    {item.organization}
                    {item.location ? `, ${item.location}` : ""}
                  </Text>
              )}
              {item.date && <Text style={styles.date}>{item.date}</Text>}
              {details &&
                  details.map((detail: string, dIdx: number) => (
                      <Text key={dIdx} style={styles.bullet}>
                        • {detail}
                      </Text>
                  ))}
            </View>
        );
      });

  // Helper to render a tag-style section
  const renderTagSection = (tags: string[]) => (
      <View style={styles.tagContainer}>
        {tags.map((tag, idx) => (
            <Text key={idx} style={styles.tag}>
              {tag}
            </Text>
        ))}
      </View>
  );

  // Candidate header info (update as needed)
  const candidateName = "Youssef Samaan";
  const candidateContact =
      "438-404-7439 | ysamaan2001@gmail.com | linkedin.com/in/youssefsamaan | github.com/YoussefSamaan";

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{candidateName}</Text>
            <Text style={styles.contact}>{candidateContact}</Text>
          </View>

          {/* Education */}
          {resumeJson.education && resumeJson.education.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {renderTimelineSection(resumeJson.education)}
              </View>
          )}

          {/* Experience */}
          {resumeJson.work && resumeJson.work.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {renderTimelineSection(resumeJson.work)}
              </View>
          )}
          {/* Optionally include research experience if available */}
          {resumeJson.research && resumeJson.research.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Research Experience</Text>
                {renderTimelineSection(resumeJson.research)}
              </View>
          )}

          {/* Projects */}
          {resumeJson.project && resumeJson.project.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                {renderTimelineSection(resumeJson.project)}
              </View>
          )}

          {/* Technical Skills */}
          {(resumeJson["Languages"] ||
              resumeJson["Tools & Frameworks"] ||
              resumeJson["Other Technologies"] ||
              resumeJson["Tools"] ||
              resumeJson["Libraries"]) && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Skills</Text>
                {resumeJson["Languages"] && resumeJson["Languages"].length > 0 && (
                    <>
                      <Text style={styles.subSectionTitle}>Languages:</Text>
                      {renderTagSection(resumeJson["Languages"])}
                    </>
                )}
                {resumeJson["Tools & Frameworks"] &&
                    resumeJson["Tools & Frameworks"].length > 0 && (
                        <>
                          <Text style={styles.subSectionTitle}>Tools & Frameworks:</Text>
                          {renderTagSection(resumeJson["Tools & Frameworks"])}
                        </>
                    )}
                {resumeJson["Other Technologies"] &&
                    resumeJson["Other Technologies"].length > 0 && (
                        <>
                          <Text style={styles.subSectionTitle}>Other Technologies:</Text>
                          {renderTagSection(resumeJson["Other Technologies"])}
                        </>
                    )}
                {resumeJson["Tools"] && resumeJson["Tools"].length > 0 && (
                    <>
                      <Text style={styles.subSectionTitle}>Tools:</Text>
                      {renderTagSection(resumeJson["Tools"])}
                    </>
                )}
                {resumeJson["Libraries"] && resumeJson["Libraries"].length > 0 && (
                    <>
                      <Text style={styles.subSectionTitle}>Libraries:</Text>
                      {renderTagSection(resumeJson["Libraries"])}
                    </>
                )}
              </View>
          )}

          {/* Hobbies & Awards */}
          {(resumeJson.hobby || resumeJson.award) && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Hobbies & Awards</Text>
                {resumeJson.hobby && resumeJson.hobby.length > 0 && (
                    <>
                      <Text style={styles.subSectionTitle}>Hobbies:</Text>
                      {renderTagSection(resumeJson.hobby)}
                    </>
                )}
                {resumeJson.award && resumeJson.award.length > 0 && (
                    <>
                      <Text style={styles.subSectionTitle}>Awards:</Text>
                      {renderTagSection(resumeJson.award)}
                    </>
                )}
              </View>
          )}
        </Page>
      </Document>
  );
}

export default ResumePDF;
