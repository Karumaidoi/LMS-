import { Badge, Button, Modal } from "flowbite-react";
import { useLocation } from "react-router";
import { formatCurrency } from "../utils/helper";
import { useState } from "react";
import FileViewer from "react-file-viewer";

function Enroll() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const course = location.state;
  console.log(course);
  return (
    <div className="bg-white">
      <div className="pt-[5rem] mx-[10rem] grid grid-cols-2 gap-6 bg-white justify-center items-center content-center h-full">
        <div className="h-[25rem] w-full bg-gray-50"></div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[1.5rem] font-bold mb-4">{course?.title}</h2>
          <p>{course?.description}</p>
          <div className="grid grid-cols-2 gap-5">
            <p className="flex items-center gap-4">
              created By:{" "}
              <Badge color={"success"} size="lg" className="w-[max-content]">
                {course?.User.userName}
              </Badge>
            </p>

            <p className="flex items-center gap-4">
              Amout: {formatCurrency(course?.amount)}
            </p>

            <p className="flex items-center gap-4">
              categoty:{" "}
              <Badge color={"gray"} size="lg" className="w-[max-content]">
                {course?.category}
              </Badge>
            </p>

            <p className="flex items-center gap-4">
              Students Enrolled: {course?.downloads}
            </p>
          </div>

          <Button className="mt-5" onClick={() => setShowModal(true)}>
            Enroll
          </Button>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FileViewer filePath={course?.courseFile} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Enroll;
