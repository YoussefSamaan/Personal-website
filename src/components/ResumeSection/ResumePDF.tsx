import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { TimelineItem } from '../../types';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#1e293b', // slate-800
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#334155', // slate-700
  },
  item: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#334155', // slate-700
  },
  itemOrg: {
    fontSize: 10,
    marginBottom: 5,
    color: '#475569', // slate-600
  },
  itemDate: {
    fontSize: 10,
    color: '#64748b', // slate-500
    marginBottom: 5,
  },
  itemDesc: {
    fontSize: 10,
    marginTop: 5,
    color: '#475569', // slate-600
    lineHeight: 1.4,
  },
  hobbies: {
    fontSize: 10,
    marginTop: 3,
    color: '#475569', // slate-600
    lineHeight: 1.4,
  },
});

interface ResumePDFProps {
  selectedItems: TimelineItem[];
  // selectedSections: string[];
}

export function ResumePDF({ selectedItems }: ResumePDFProps) {
  const groupedItems = selectedItems.reduce((acc: { [type: string]: TimelineItem[] }, item) => {
    const type = item.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(item);
    return acc;
  }, {});

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Alex Chen</Text>
          </View>

          {Object.keys(groupedItems).map((type) => (
              <View key={type} style={styles.section}>
                <Text style={styles.heading}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
                {groupedItems[type].map((item, index) => (
                    <View key={index} style={styles.item}>
                      <Text style={styles.itemTitle}>{item.title}</Text>
                      <Text style={styles.itemOrg}>{item.organization}</Text>
                      <Text style={styles.itemDate}>{item.date}</Text>
                      <Text style={styles.itemDesc}>{item.description}</Text>
                    </View>
                ))}
              </View>
          ))}
        </Page>
      </Document>
  );
}