import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import { Public, AssignmentInd, Devices } from "@mui/icons-material";

import SAP2 from "./SAP2.png";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const MediumDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   *
   * @param event
   */
  const handleChange = (event) => {
    // debugger;
    // const fieldName: string = event.target.id;
    // setListItem({ ...newList, [fieldName]: event.target.value });
    // setListName(event.target.value);
  };

  return (
    <div>
      <div className="dialog">
        <Box
          sx={{
            //   bgcolor: "background.default",
            //   bgcolor: "#000011",
            bgcolor: "transparent",
            color: "text.primary",
            //   borderRadius: 1,
            p: 3,
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Take a glimpse into the future with SAP
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "transparent",
            // bgcolor: "#000011",
            color: "text.primary",
            //   borderRadius: 1,
            // p: 3,
            // display: "inline-block",
            justifyContent: "center",
            textAlign: "center",
            display: "flex-block",
          }}
        >
          <Button variant="contained" onClick={handleClickOpen}>
            Click here
          </Button>
        </Box>
        {/* <Box
          sx={{
            bgcolor: "transparent",
            color: "text.primary",
            //   borderRadius: 1,
            p: 3,
            // display: "inline-block",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
          }}
        >
          <img src={SAP2} alt="SAP2" />
        </Box> */}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Concept of Me with a Focus on Mobility</DialogTitle>

        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Imagine creating and training an artificially intelligent digital
            version of yourself that lives on your mobile devices who can learn
            and automate your daily tasks and workflows, keeping you connected
            from anywhere in the world
          </Typography>
          <Divider orientation="horizontal" flexItem>
            <Public
              fontSize="large"
              sx={{ justifyContent: "center", display: "flex" }}
            />
          </Divider>
          <Typography variant="body1" gutterBottom>
            At SAP we envision our apps running on any device with the
            capability to learn from a users unique behaviour and, over time,
            present relevant and concise data from and SAP system to them before
            they've even asked for it. We believe that through artificail
            intelligence and machine learning we can help users build a digital
            model of the their interactions and preferences captured on the
            devices themselves and use that model to pull data directly from
            SAP's API's and present it in a meaningful way as and when its
            needed. All of this without the need for any user interaction at
            all.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Using the strong and robust security like Apple's FaceID and
            end-to-end encryption, already built into these mobile devices, we
            can ensure private and confidential company data is accessed
            securely and facilitate proper data authorisation seamlessly. We
            also ensure users privacy is carefully respected as all "learned
            behaviour" is stored on the device itself and data from SAP's
            external API's is seamlessly integrated into the users daily
            workflow.
          </Typography>
          {/* <Grid container>
            <Grid item xs>
              <Typography variant="subtitle2" gutterBottom>
                SAP apps will learn from a users unique behaviour and over time
                present data from SAP to them from anywhere in the world.
              </Typography>
              <AssignmentInd />
            </Grid>
            <Divider orientation="vertical" flexItem>
              Seamless Integration
            </Divider>
            <Grid item xs>
              <Typography variant="subtitle2" gutterBottom>
                Using secure authentication, pull data from SAP's API's and
                digest it into meaningful data before passing it back to the
                user.
              </Typography>
            </Grid>
          </Grid> */}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            // onClick={handleCreateList}
            // disabled={isDisabled}
          >
            Submit
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default MediumDialog;
