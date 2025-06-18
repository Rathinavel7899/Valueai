
"use client"
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Box, Typography } from "@mui/material";

// const reviews = [
//   {
//     name: "RVP",
//     username: "@rvp",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "MAHi BHAI",
//     username: "@MS",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "Faf Duplesis",
//     username: "@faf",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "AB Devilliers",
//     username: "@AB De",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Kiren Pollard",
//     username: "@pollard",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "Hardik Pandya",
//     username: "@hardik",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];
const reviews = [
  {
    name: "RVP",
    username: "@rvp",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "MAHi BHAI",
    username: "@MS",
    body: "I'm speechless. This is amazing.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Faf Duplesis",
    username: "@faf",
    body: "This is amazing. I love it.",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "AB Devilliers",
    username: "@AB De",
    body: "Incredible design and experience!",
    img: "https://randomuser.me/api/portraits/men/35.jpg",

  },
  {
    name: "Kiren Pollard",
    username: "@pollard",
    body: "A complete game changer.",
    img:"https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Hardik Pandya",
    username: "@hardik",
    body: "Super smooth. Super clean.",
    img:"https://randomuser.me/api/portraits/men/45.jpg",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  isFirstRow,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  isFirstRow?: boolean;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-84 cursor-pointer overflow-hidden rounded-xl border p-4 transition-transform duration-300 hover:rotate-3",
        // light styles
        "border-blue-950/[.1] bg-gray-900 hover:bg-gray-600",
        // dark styles
        isFirstRow
          ? "dark:border-cyan-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          : "dark:border-purple-400 dark:bg-gray-800 dark:hover:bg-gray-700",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="40"
          height="40"
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-cyan-300">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/50">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

const Review = () => {
  return (
    <Box width="100%" sx={{ backgroundColor: '#1A1A2E', color: 'white', py: 6 }}>
      <Typography
        // variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize:60,
          mb: 4,
          color: 'white',
        }}
      >
        What Our Clients Say
      </Typography>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} isFirstRow={true} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} isFirstRow={false} />
          ))}
        </Marquee>
      </div>
    </Box>
  );
};

export default Review;