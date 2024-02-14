import { Box, Card, Image, Heading, Text } from "rebass";

function App() {
  return (
    <div className="App">
      <Box width={256}>
        <Card p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
          <Image
            src={`https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20`}
          />
          <Box px={2}>
            <Heading as="h3">Card</Heading>
            <Text fontSize={0}>Small meta text</Text>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default App;
