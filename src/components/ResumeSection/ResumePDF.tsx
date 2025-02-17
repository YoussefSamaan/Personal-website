import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { TimelineItem, ResumeJson } from "../../types";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.4,
    color: "#333",
  },
  header: {
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    textAlign: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b", // slate-800
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e40af", // blue-900 accent
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1", // slate-300
    paddingBottom: 4,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  item: {
    marginBottom: 12,
    paddingLeft: 10,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#334155", // slate-700
  },
  itemOrg: {
    fontSize: 10,
    color: "#475569", // slate-600
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 10,
    color: "#64748b", // slate-500
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 10,
    color: "#475569",
    marginLeft: 10,
    marginBottom: 2,
  },
  bullet: {
    fontSize: 10,
    marginRight: 4,
    color: "#1e40af", // accent color for bullet
  },
});

interface ResumePDFProps {
  resumeJson: ResumeJson;
}

export function ResumePDF({ resumeJson }: ResumePDFProps) {
  return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header with candidate name */}
          <View style={styles.header}>
            <Text style={styles.name}>Youssef Samaan</Text>
            {/* You could add a subtitle or contact info here */}
          </View>

          {/* Loop over each section in the resume JSON */}
          {Object.keys(resumeJson).map((sectionKey) => {
            const value = resumeJson[sectionKey];
            if (!value || value.length === 0) return null;

            // Determine if the items are TimelineItems or simple strings.
            const isTimelineItems =
                typeof value[0] === "object" && (value[0] as TimelineItem).title !== undefined;

            return (
                <View key={sectionKey} style={styles.section}>
                  <Text style={styles.sectionHeading}>
                    {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                  </Text>
                  {isTimelineItems ? (
                      (value as TimelineItem[]).map((item, idx) => (
                          <View key={idx} style={styles.item}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            {item.organization && (
                                <Text style={styles.itemOrg}>{item.organization}</Text>
                            )}
                            {item.date && <Text style={styles.itemDate}>{item.date}</Text>}
                            {item.description &&
                                (Array.isArray(item.description) ? (
                                    item.description.map((desc, i) => (
                                        <View key={i} style={{ flexDirection: "row" }}>
                                          <Text style={styles.bullet}>•</Text>
                                          <Text style={styles.itemDesc}>{desc}</Text>
                                        </View>
                                    ))
                                ) : (
                                    <View style={{ flexDirection: "row" }}>
                                      <Text style={styles.bullet}>•</Text>
                                      <Text style={styles.itemDesc}>{item.description}</Text>
                                    </View>
                                ))}
                          </View>
                      ))
                  ) : (
                      <View style={styles.item}>
                        {(value as string[]).map((str, idx) => (
                            <View key={idx} style={{ flexDirection: "row" }}>
                              <Text style={styles.bullet}>•</Text>
                              <Text style={styles.itemDesc}>{str}</Text>
                            </View>
                        ))}
                      </View>
                  )}
                </View>
            );
          })}
        </Page>
      </Document>
  );
}
