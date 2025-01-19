import {
  VStack,
  Heading,
  Text,
  Button,
  Divider,
  Textarea,
  Flex,
  HStack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { get_notes, logout, add_note, delete_note } from "../enpoints/api.js";

import { useAuth } from "../context/useAuth.jsx";

const Menu = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const { user } = useAuth();

  const nav = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await get_notes();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      nav("/login");
    }
  };

  const addNote = async () => {
    if (newNote) {
      const note = await add_note(newNote);
      setNotes([note, ...notes]);
      setNewNote("");
    }
  };

  const deleteNote = async (note_id) => {
    await delete_note(note_id);
    const updatedNotes = notes.filter((note) => note.id != note_id)
    console.log(updatedNotes)
    setNotes(updatedNotes);
  };

  return (
    <Flex alignItems="center" justify="center">
      <VStack minH="500px" w="70%">
        <HStack spacing={4} padding='3'>
            <Heading>Welcome back {user ? user.username : "Guest"}</Heading>
            <Button onClick={handleLogout} colorScheme="red">
            Logout
            </Button>
        </HStack>
        <Divider orientation="horizontal" padding='3'/>
          <HStack spacing={4} padding='3'>
            <Textarea
              placeholder="Note text"
              onChange={(e) => setNewNote(e.target.value)}
              value={newNote}
            />
            <Button onClick={addNote} colorScheme="gray">
              <AddIcon />
            </Button>
          </HStack>
          <Divider orientation="horizontal" padding='3'/>
            {notes.map((note) => {
                return (
                <HStack spacing={4} padding='3' key={note.id}>
                <Card>
                    <CardBody>
                    <Text>
                        {note.description}
                    </Text>
                    
                    </CardBody>
                </Card>
                <Button onClick={() => deleteNote(note.id)} colorScheme="gray"><DeleteIcon /></Button>
                </HStack>
                );
            })}

      </VStack>
    </Flex>
  );
};

export default Menu;
