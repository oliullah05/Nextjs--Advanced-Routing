import {getDictionary} from "../dictionaries/dictionaries"

const Contact = async({params:{lang}}) => {
    const dict = await getDictionary(lang)
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <h1>{dict.Contact}</h1>
        </div>
    );
};

export default Contact;