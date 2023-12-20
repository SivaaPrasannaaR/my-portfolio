import React, { useState, useEffect } from "react"
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Dialog,
  ListItem,
  ListItemText,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import MenuIcon from "@mui/icons-material/Menu"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import styles from "../SMLayout.module.scss"
import { SubjectType } from "./SmRepo"

interface SubjectMenuProps {
  subjectList: SubjectType[]
  subject: string
  onSubjectClick: (subject: string) => void
  createNewNote: () => void
  getAllNotes: () => void
  updateSubjectList: (subjList: SubjectType[]) => void
}

const SubjectMenu: React.FC<SubjectMenuProps> = ({
  subjectList,
  subject,
  onSubjectClick,
  createNewNote,
  getAllNotes,
  updateSubjectList,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [subjectListCopy, setSubjectListCopy] =
    useState<SubjectType[]>(subjectList)

  useEffect(() => {
    setSubjectListCopy(subjectList)
  }, [subjectList])

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleMenuClick = (subject: string) => {
    onSubjectClick(subject)
  }

  const handleSubjectDialogCancel = () => {
    setEditDialogOpen(!editDialogOpen)
  }

  const handleSubjectDialogSave = () => {
    // Add logic to update the subject list
    // You can use setNewSubjectName("") to clear the input field
    // and update your state or call a function to update the list

    updateSubjectList(subjectListCopy)
    handleSubjectDialogCancel()
  }

  const handleAddSubject = () => {
    // Add a new subject at the 0 index of subjectListCopy
    const newSubject: SubjectType = { title: "", rank: 0 } // You can set default values
    setSubjectListCopy([newSubject, ...subjectListCopy])
  }

  const handleSubjectBox = (
    subj: SubjectType,
    title?: string,
    rank?: number
  ) => {
    setSubjectListCopy((prevState) =>
      prevState.map((prevSubj) => {
        if (prevSubj.title === subj.title) {
          if (title) {
            return { ...prevSubj, title: title }
          }
          if (rank) {
            return { ...prevSubj, rank: rank }
          }
        }
        return prevSubj
      })
    )
  }

  return (
    <>
      {/* Menu Icon for Mobile */}
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={styles.menuIcon}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} role="presentation">
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              background: "white",
            }}
          >
            <List>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                  onClick={() => setEditDialogOpen(true)}
                >
                  {"Subject"}
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  disabled={subject === "All Notes"}
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => createNewNote()}
                >
                  {"Note"}
                </Button>
              </ListItem>
            </List>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => {
                  handleMenuClick("All Notes")
                  getAllNotes()
                }}
              >
                {"All Notes"}
              </Button>
            </ListItem>
            <Divider />
          </div>

          <List>
            {subjectList.map((subj) => (
              <div key={subj.title}>
                <ListItem
                  button
                  style={
                    subject === subj.title
                      ? { background: "#1565c0", color: "#fff" }
                      : {}
                  }
                  onClick={() => {
                    handleMenuClick(subj.title)
                  }}
                >
                  <ListItemText primary={subj.title} />
                </ListItem>
              </div>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Edit Subject Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={handleSubjectDialogCancel}
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <DialogTitle
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          Edit Subjects
          <IconButton onClick={handleAddSubject} edge="end" color="primary">
            <AddCircleIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {subjectListCopy.map((subj) => {
            return (
              <Box key={subj.title}>
                <TextField
                  style={{ maxWidth: "200px", margin: "4px" }}
                  value={subj.title}
                  onChange={(e) => handleSubjectBox(subj, e.target.value)}
                />
                <TextField
                  value={subj.rank}
                  type="number"
                  style={{ maxWidth: "60px", margin: "4px" }}
                  onChange={(e) =>
                    handleSubjectBox(subj, "", parseInt(e.target.value))
                  }
                />
              </Box>
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubjectDialogCancel}>Cancel</Button>
          <Button onClick={handleSubjectDialogSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SubjectMenu
