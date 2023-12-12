export default function Project({ title, description, image, custom, link, button }) {
    console.log(custom);
    return (
        <div className={"p-8 border-b-4 border-violet-900 rounded-md sm:max-w-xl shadow-2xl shadow-violet-950/50 bg-violet-400/5"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-row gap-4"}>
                    <div className={"flex flex-col gap-4"}>
                        <div className={"flex flex-col gap-4"}>
                            {image !== undefined ? <img className={"rounded-md"} src={image} alt={title}/> : custom }
                        </div>
                        <span className={"text-4xl tracking-wide font-bold"}>{title}</span>
                        <span className={"text-xl leading-relaxed"}>{description}</span>
                    </div>
                </div>
                <div className={"flex flex-row gap-4 justify-center"}>
                    <a className={"text-xl leading-relaxed px-4 py-2 rounded-xl bg-violet-300/5 hover:bg-violet-300/10"} href={link} target={"_blank"} rel={"noopener noreferrer"}>{button}</a>
                </div>
            </div>
        </div>
    );
}