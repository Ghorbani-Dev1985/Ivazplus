import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const CustomModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return ( 
        <>
        <Button onPress={onOpen} color="secondary">Open Modal</Button>
        <Modal 
          backdrop="opaque" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          radius="lg"
          classNames={{
            body: "py-6",
            backdrop: "bg-primary-500 backdrop-opacity-40",
        }}
        >
          <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="foreground" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
            </>
     );
}
 
export default CustomModal;