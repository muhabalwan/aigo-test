import React, { useState } from 'react';
import { IGeoJsonMap } from '../../helpers/types';
import { postJsonFile, IGeoJsonData } from '../../api'
import { StyledButton, StyledInput, StyledLabel } from './StyledUpload.css';



interface IProps {
    getUploadedFileData: (data: IGeoJsonMap) => void;
}

const UploadFile = ({ getUploadedFileData }: IProps) => {
    const [uplodadedFile, setUplodadeFile] = useState<string>();

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event && event.currentTarget && event.currentTarget.files) {
            const file = new FileReader();
            file.onload = function (e) {
                try {
                    if (typeof e?.target?.result === "string") {
                        setUplodadeFile(e?.target?.result)
                    }
                } catch (e) {
                    console.error(e)
                }
            };
            file.readAsText(event?.currentTarget?.files[0]);
        }
    }

    const onSubmit = () => {
        if (uplodadedFile) {
            postJsonFile(uplodadedFile).then((result) => {
                getUploadedFileData(result?.data);
            });
        }
    }

    return (
        <div>
            <StyledLabel htmlFor="fileUpload">Click to upload file:
                <StyledInput type="file"
                    id="fileUpload" name="fileUploader"
                    accept="application/JSON" onChange={onFileChange}>
                </StyledInput>
            </StyledLabel>
            <StyledButton type="submit" name="submit" value="submit" onClick={onSubmit}> Submit </StyledButton>
        </div>
    )

}

export default UploadFile;