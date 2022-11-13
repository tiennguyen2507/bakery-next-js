function About() {
  return <div>about</div>;
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default About;
