import { Box, Typography} from "@mui/material";

export default function NavFooter() {
    return(
        <Box sx={{ bgcolor: "grey.200", p: 2, textAlign: "center", mt: 4}}>
            <Typography variant="body2">&copy; 2025 MyApp. All rights reserved.</Typography>
       </Box>
    )
}