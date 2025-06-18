"use client";

import Link from "next/link";
import { Typography, Button } from "@mui/material";

export default function Setting() {
    return (
        <div>
        <Typography variant="h4"> Setting Page </Typography>
       <Link href="/profile" passHref>
        <Button variant="contained">Go to Profile</Button>
      </Link>
       <Link href="/" passHref>
        <Button variant="contained">Go to Home</Button>
      </Link>
       <Link href="/blog" passHref>
        <Button variant="contained">Go to Blog</Button>
      </Link>
      </div>
        );
}