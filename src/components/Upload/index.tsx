import React, { useState } from 'react';
import { IGeoJsonMap } from '../../helpers/types';
import { postJsonFile, IGeoJsonData } from '../../api'



interface IProps { 
    getUploadedFileData: (data: IGeoJsonMap) => void;
}

const UploadFile = ({ getUploadedFileData  }: IProps) => {
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
            <label htmlFor="fileUpload">Choose a JSON file:</label>
            <input type="file"
                id="fileUpload" name="fileUploader"
                accept="application/JSON" onChange={onFileChange}></input>
            <button type="submit" name="submit" value="submit" onClick={onSubmit}> Submit </button>
        </div>
    )

}

export default UploadFile;