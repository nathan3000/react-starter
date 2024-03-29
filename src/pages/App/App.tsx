import React from "react";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import Button from "../../components/Button";

type Props = {
  title: string;
};

const App = (props: Props) => {
  const { title } = props;
  return (
    <Box bg="gray.100" minHeight="screen" textAlign="center">
      <Heading
        as="h1"
        p={4}
        pt={8}
        fontWeight={6}
        color="gray.700"
        fontSize={8}
        css={{
          textDecoration: "underline",
        }}
      >
        {title}
      </Heading>
      <Text as="p" mb={4} fontWeight={4}>
        Create React App with
      </Text>
      <ul>
        <li>Typescript</li>
        <li>Emotion</li>
        <li>Storybook</li>
      </ul>

      <Box mt={6}>
        <Link
          href="https://nathanfisher.me"
          rel="noopener noreferrer"
          target="_blank"
        >
          By Nathan Fisher
        </Link>
      </Box>

      <Box mt={10} />
      <Box mt={10}>
        <Button variant="primary">Button</Button>
      </Box>
    </Box>
  );
};

export default App;
