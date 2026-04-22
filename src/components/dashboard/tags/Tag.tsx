// when you click the tag you will be able to see all the other competitions with that tag
// there will be subject tags and difficulty tags 

export interface TagData {
    label: string; 
    type?: "Difficulty" | "Subject" 
    href: string;
    iconSrc: string; 
}

export function Tag({ label, type, href, iconSrc }: TagData) {
    return (
        <div className="hover:brightness-75">
            <p className="">{ }</p>
        </div>

    ); 
}
