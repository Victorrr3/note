import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import styles from "../styles/Note.module.css";
import styleUtils from "../styles/utils.module.css";
import { formatDate } from "../utils/formatDate";
import { MdDelete } from "react-icons/md";

interface NoteProps {
  note: NoteModel;
  onDeleteNoteClicked: (note: NoteModel) => void;
  onNoteClicked: (note: NoteModel) => void;
  className?: string;
}

const Note = ({
  note,
  onDeleteNoteClicked,
  onNoteClicked,
  className,
}: NoteProps) => {
  const { text, title, createdAt, updatedAt } = note;

  let createUpdatedText: string;
  if (updatedAt > createdAt) {
    createUpdatedText = " 업데이트:  " + formatDate(updatedAt);
  } else {
    createUpdatedText = " 생성날짜:  " + formatDate(createdAt);
  }
  return (
    <Card
      className={`${styles.noteCard} ${className}`}
      onClick={() => onNoteClicked(note)}
    >
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styleUtils.flexCenter}>
          {title}
          <MdDelete
            className="text-muted ms-auto"
            onClick={(e) => {
              onDeleteNoteClicked(note);
              e.stopPropagation();
            }}
          />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Note;
