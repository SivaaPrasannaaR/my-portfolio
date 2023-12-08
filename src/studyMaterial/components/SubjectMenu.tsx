import React, { useState } from "react"
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import MenuIcon from "@mui/icons-material/Menu"
import styles from "../SMLayout.module.scss"

interface SubjectMenuProps {
  subjectList: string[] // Assuming subjectList is an array of string subjects
  subject: string // Assuming subjectList is an array of string subjects
  onSubjectClick: (subject: string) => void
  createNewNote: () => void
  createNewSubject: () => void
}

const SubjectMenu: React.FC<SubjectMenuProps> = ({
  subjectList,
  subject,
  onSubjectClick,
  createNewNote,
  createNewSubject,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
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
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => createNewSubject()}
              >
                {"Subject"}
              </Button>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => createNewNote()}
              >
                {"Note"}
              </Button>
            </ListItem>
          </List>
          <Divider />
          <List>
            {subjectList.map((subj) => (
              <ListItem key={subj} button onClick={() => onSubjectClick(subj)}>
                <ListItemText primary={subj} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default SubjectMenu
