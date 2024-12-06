import Image from "next/image";
import Content from "./componen/home/content";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/About">
        <p>Go To Abouut</p>
      </Link>
      <Content />
    </div>
  );
}
