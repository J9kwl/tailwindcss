import Image from "next/image";
const Herosection = () => {
    return (
            <div className="flex justify-between items-center p-8"> 
            <div>
            <Image 
        src="/bg.png"
        alt="code Image"
        width={300}
        height={300}/>
      </div>
      <button className="text-white py-4 border-4 rounded-3xl border-solid h-18 w-13 p-2 border-blue-900 ">contact me</button>
        </div>
    );
};
export default Herosection;