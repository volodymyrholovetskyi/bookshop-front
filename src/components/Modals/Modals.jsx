import {Box, Fade, Modal} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import styles from "../../pages/orders/styles/OrderList.module.css";
import Typography from "../Typography";
import React from "react";

const Modals =
    ({
         open,
         handleClose,
         title,
         description,
     }) => {

        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}>
                <Fade in={open}>
                    <Box className={styles.boxModal}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            <p>{title}</p>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{mt: 2}}>
                            <p>{description}</p>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        )
    }

export default Modals;