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
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

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
      <Box
        sx={{
          //   bgcolor: "background.default",
          bgcolor: "#000011",
          color: "text.primary",
          //   borderRadius: 1,
          p: 3,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Take a glimpse into the future of SAP
        </Typography>
        <AccessAlarm />
        <Button
          sx={{
            bgcolor: "background.default",
            // bgcolor: "#000011",
            color: "text.primary",
            //   borderRadius: 1,
            // p: 3,
            justifyContent: "center",
            display: "flex",
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Click here
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Concept of Me with a Focus on Mobility</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Creating and training an artificially intelligent digital version of
            yourself that runs on your mobile device • Each SAP app running on a
            persons mobile device will have the ability to learn from a users
            unique behaviour and over time present data from SAP to them as they
            would search for it on their own. • Through machine learning build a
            model of the users interactions and preferences on the device itself
            (what data they search for and when during the day) and use that
            model to pull data from SAP's API's and present it in a meaningful
            way as its needed. • Using the security built into the mobile device
            (Apple's FaceID or fingerprint sensor) and use that to form strong
            security and facilitate proper data authorisation seamlessly. •
            Users privacy is carefully respected as all "learned behaviour" is
            stored on the device itself and data from SAP's extenral API's is
            seamlessly integrated into the users daily workflow. • Each app/
            micro service has the capability for the user to “train” it to
            automate the mundane tasks for each of these services Connecting SAP
            access and authorization to fingerprint and facial recognition on
            devices like an iPhone
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                SAP apps will learn from a users unique behaviour and over time
                present data from SAP to them as they would search for it on
                their own
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem>
              Seamless Integration
            </Divider>
            <Grid item xs>
              <Typography variant="body1" gutterBottom>
                Using secure authenitcation, pull data from SAP's API's and
                digest it into meaningfull data before passing it back to the
                user
              </Typography>
            </Grid>
          </Grid>
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
