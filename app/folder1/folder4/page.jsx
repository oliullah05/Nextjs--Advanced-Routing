import Link from "next/link";

const Folder4 = () => {
    return (
        <div className='p-20 flex flex-col gap-14'>
            <h1 className='text-2xl'>Folder 4</h1>
            <Link href={"/folder1/folder3"} className="text-blue-400">Folder 3</Link>
            <Link href={"/contact"} className="text-green-400">Contact</Link>
        </div>
    );
};

export default Folder4;