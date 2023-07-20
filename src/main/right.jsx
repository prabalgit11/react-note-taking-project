import ReactMarkdown from "react-markdown";
import Banner from "./Banner.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const Main = ({ activeNote, onUpdateNote }) => {
    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) {
        return <div className="no-active-note">
            <img className="app-main-banner" src={Banner} alt="Banner" />
            <p class="app-main-name">Pocket Notes</p>
            <p className="app-main-info">Send and receive messages without keeping your phone online.
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

            <p className="app-main-encryption">< FontAwesomeIcon icon={faLock} className="lock" />end-to-end encrypted</p>

        </div>
    }
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id="title"
                    placeholder="Note Title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    autoFocus
                />
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{activeNote.title}</h1>
                    <ReactMarkdown className="markdown-preview">
                        {activeNote.body}
                    </ReactMarkdown>
                </div>

            </div>
            <div><textarea
                id="body"
                placeholder="Enter your text here..........."
                value={activeNote.body}
                onChange={(e) => onEditField("body", e.target.value)} />
            </div>


        </div>
    );
};

export default Main;