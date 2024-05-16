import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
const Search = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return ( 
          <>
             <Button onPress={onOpen} className="flex-center bg-transparent px-0 min-w-11">
             <Image
              width={24}
              height={24}
              alt="ghorbani-dev.ir"
              placeholder="blur"
              blurDataURL="images/icon/search.svg"
              src="images/icon/search.svg"
              objectFit={true}
            />
            <span className="hidden md:block">جستجو</span>
             </Button>
        <Modal 
          backdrop="opaque" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          radius="lg"
          classNames={{
            body: "py-6",
            backdrop: "bg-primary-200/50 backdrop-opacity-40",
        }}
        >
          <ModalContent>
            {(onClose) => (
                <>
                <ModalBody>
                  <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                    Action
                  </Button>
                </ModalBody>
                
              </>
            )}
          </ModalContent>
        </Modal>
          </>
     );
}
 
export default Search;