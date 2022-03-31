import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Text,
} from "@chakra-ui/react";
import { INewsletterModalForm } from "@interfaces";
import { useStore } from "@store";
import { observer } from "mobx-react-lite";

const NewsletterModalForm = observer(
    ({ containerProps }: INewsletterModalForm) => {
        const {
            ui: { isOpenNewsletterModalForm, onCloseNewsletterModalForm },
        } = useStore();

        return (
            <Modal
                isOpen={isOpenNewsletterModalForm}
                onClose={onCloseNewsletterModalForm}
                size="newsletterModal"
                {...containerProps}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textStyle="body18Bold">
                        MADDE22'ye Üye Ol,{" "}
                        <Text as="span" color="brand.500">
                            Sürprizlere
                        </Text>{" "}
                        Hazır Ol
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}></ModalBody>

                    <ModalFooter>
                        <Button onClick={onCloseNewsletterModalForm}>
                            Haberdar Olun
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    },
);

export default NewsletterModalForm;
