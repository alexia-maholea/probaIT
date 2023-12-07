// CreatePoll.tsx
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

interface CreatePollProps {
  onCreateSuccess: () => void;
  onCancel: () => void;
  show: boolean;
}


const CreatePoll: React.FC<CreatePollProps> = ({ onCreateSuccess, onCancel, show }) => {
  const [title, setTitle] = useState('');
  const [votingType, setVotingType] = useState('single');
  const [options, setOptions] = useState(['']);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleCreatePoll = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/create-poll', { title, votingType, options });

      if (response.data.success) {
        onCreateSuccess();
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Eroare la crearea sondajului:', error);
    }
  };

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Create Poll</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-grid gap-2">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter poll title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Voting Type</Form.Label>
            <Form.Select
              value={votingType}
              onChange={(e) => setVotingType(e.target.value)}
            >
              <option value="single">Single Choice</option>
              <option value="multiple">Multiple Choice</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Options</Form.Label>
            {options.map((option, index) => (
              <div key={index} className="mb-2">
                <Form.Control
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </div>
            ))}
            <Button variant="secondary" onClick={handleAddOption}>Add Option</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCreatePoll}>
          Create Poll
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePoll;
