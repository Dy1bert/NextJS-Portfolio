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
        ImgSrc: "/WordRace-Logo.png",
    },
    {
        ID: 1,
        slug: "floor-54",
        Name: "Floor 54",
        ShortDescription: "Mech dungeon crawler built in UE5.",
        LongDescription: "This is still a looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/Floor54-TitleShot.png",
    },
    {
        ID: 2,
        slug: "pcg-road-builder-tool",
        Name: "PCG Road Builder Tool",
        ShortDescription: "Road builder tool in UE5.",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/PCGTool-MainShot.png",
    },
    {
        ID: 3,
        slug: "test",
        Name: "Test",
        ShortDescription: "This is yet another project description",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/TestBG.png",
    },
    {
        ID: 4,
        slug: "test-2",
        Name: "Test 2",
        ShortDescription: "This is yet another project description",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/TestBG.png",
    },
];
