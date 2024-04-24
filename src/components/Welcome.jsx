import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <Alert variant="primary" className="mt-4">
      <Alert.Heading>Welcome!</Alert.Heading>
      <p>Here you can find all the books you want!</p>
    </Alert>
  );
};
export default Welcome;
