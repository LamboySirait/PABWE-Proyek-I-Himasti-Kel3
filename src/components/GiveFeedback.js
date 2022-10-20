import { Button, Form } from "react-bootstrap";

const GiveFeedback = () => {
  return (
    <div className="p-3" style={{width: '20%', height: 'auto', position: 'fixed', right: '1%', bottom: '15%', backgroundColor: 'white', borderRadius: '10px'}} >
      <p style={{fontSize: '150%'}}>Give us your feedback</p>

      <Form className="text-start">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Masukkan email anda" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea"  rows={5} style={{resize: 'none'}} placeholder="Masukkan feedback anda" />
        </Form.Group>
        <Button className="mt-3"  style={{marginLeft: 'auto'}}>
          Send
        </Button>
      </Form>
    </div>
  )
};

export default GiveFeedback;
