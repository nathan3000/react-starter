import React from "react";

type Props = {
  title: string;
};

const App = (props: Props) => {
  const { title } = props;
  return (
    <div className="bg-gray-100 min-h-screen text-center">
      <h1 className="p-4 pt-8 font-semibold text-gray-700 text-5xl underline">
        {title}
      </h1>
      <p className="font-semibold mb-4">Create React App with</p>
      <ul>
        <li>Typescript</li>
        <li>Emotion</li>
        <li>Tailwind CSS</li>
        <li>Storybook</li>
      </ul>
      <p className="mt-8">
        <a
          href="https://nathanfisher.me"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-800 underline"
        >
          By Nathan Fisher
        </a>
      </p>
    </div>
  );
};

export default App;
