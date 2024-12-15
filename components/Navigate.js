import { useRouter } from "next/router";

const Navigate = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={() => navigateTo("/")}>Go to Home</button>
      <button onClick={() => navigateTo("/about")}>Go to About</button>
      <button onClick={() => navigateTo("/contact")}>Go to Contact</button>
      <button onClick={() => navigateTo("/footer")}>Go to Footer</button>
    </div>
  );
};

export default Navigate;
