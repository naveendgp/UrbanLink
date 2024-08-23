// src/components/AppointmentForm.js

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  useToast,
} from "@chakra-ui/react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    department: "",
    date: "",
    time: "",
    description: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send formData to the backend
    console.log(formData);

    // Show a success message
    toast({
      title: "Appointment scheduled.",
      description: "We've scheduled your appointment.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear form after submission
    setFormData({
      projectName: "",
      department: "",
      date: "",
      time: "",
      description: "",
    });
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Schedule Appointment
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="projectName" isRequired>
            <FormLabel>Project Name</FormLabel>
            <Input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Enter project name"
            />
          </FormControl>

          <FormControl id="department" isRequired>
            <FormLabel>Department</FormLabel>
            <Select
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Select department"
            >
              <option value="engineering">Engineering</option>
              <option value="planning">Planning</option>
              <option value="utilities">Utilities</option>
              <option value="publicWorks">Public Works</option>
            </Select>
          </FormControl>

          <FormControl id="date" isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="time" isRequired>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description of the appointment"
              resize="vertical"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" w="full">
            Schedule Appointment
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AppointmentForm;
