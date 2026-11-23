import Banner from "@/Components/Hpmepage/Banner";
import Trainings from "@/Components/Hpmepage/Trainings";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Trainings/>
      <trainingList/>
    </div>
  );
}
