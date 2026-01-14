export interface Project {
    ID: number;
    slug: string;
    Name: string;
    ShortDescription: string;
    LongDescription: string;
    ImgSrc: string;
}

export const ProjectList: Project[] = [
    {
        ID: 0,
        slug: "word-race",
        Name: "Word Race",
        ShortDescription: "Mobile word game built in UE5.",
        LongDescription: "This is a looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/TestBG.png",
    },
    {
        ID: 1,
        slug: "project-2",
        Name: "Example Project 2",
        ShortDescription: "This is another project description",
        LongDescription: "This is still a looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/TestBG.png",
    },
    {
        ID: 2,
        slug: "project-3",
        Name: "Example Project 3",
        ShortDescription: "This is yet another project description",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/TestBG.png",
    },
];
