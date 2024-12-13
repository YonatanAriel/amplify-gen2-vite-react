type Props = {
  fName: string;
};
function Welcome({ fName }: Props) {
  return <h1>Welcome, {fName}!</h1>;
}
export default Welcome;
