import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { SuccessToast } from "../Toater";
const AntUpload = ({multiple,maxUploadCount,onUploadComplete,accept}) => {
	const getBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");
	const [fileList, setFileList] = useState([
		// {
		// 	uid: "-1",
		// 	name: "image.png",
		// 	status: "done",
		// 	url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		// },
		// {
		// 	uid: "-2",
		// 	name: "image.png",
		// 	status: "done",
		// 	url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		// },
		// {
		// 	uid: "-3",
		// 	name: "image.png",
		// 	status: "done",
		// 	url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		// },
		// {
		// 	uid: "-4",
		// 	name: "image.png",
		// 	status: "done",
		// 	url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		// },
		// {
		// 	uid: "-xxx",
		// 	percent: 50,
		// 	name: "image.png",
		// 	status: "uploading",
		// 	url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		// },
		// {
		// 	uid: "-5",
		// 	name: "image.png",
		// 	status: "error",
		// },
	]);
	const handleCancel = () => setPreviewOpen(false);
	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewOpen(true);
		setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
	};
	const handleChange = ({ fileList: newFileList,file:uploadedFile,event:uploadingEven }) =>{ 
		if(uploadedFile?.status){
			setFileList(newFileList);
		}
        if (newFileList.length > 0) {
            const lastItem = newFileList[newFileList.length - 1];
            if (lastItem.hasOwnProperty('response')) {
                onUploadComplete(newFileList);
            }
        }
    };
	const uploadButton = (
		<>
			<button
				style={{
					border: 0,
					background: "none",
				}}
				type="button"
			>
				<PlusOutlined />
				<div
					style={{
						marginTop: 8,
					}}
				>
					Upload
				</div>
			</button>
		</>
	);
	  const beforeUpload = (file) => {

		return new Promise((resolve, reject) => {
			const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp' || file.type === 'image/jpg';
			if (!isJpgOrPng) {
			SuccessToast.fire({title:'You can only upload JPG/PNG file!',icon:"warning"});
			reject(false);
			}
			const isLt2M = file.size / 1024 / 1024 < 2;
			if (!isLt2M) {
				SuccessToast.fire({title:'Image must smaller than 2MB!',icon:"warning"});
				reject(false);
			}
			resolve(true)
		})
		
	  };
	return (
		<>
			<>
				<Upload
					action={`${process.env.NEXT_PUBLIC_MEDIA_SERVICE_URL}/upload`}
					method="POST"
					headers={{
						// "Content-Type": "multipart/form-data",
						"Service-Name":
							process.env.NEXT_PUBLIC_MEDIA_SERVICE_NAME || "adil-travels",
					}}
					listType="picture-card"
					fileList={fileList}
					onPreview={handlePreview}
					beforeUpload={beforeUpload}
					onChange={handleChange}
					disabled={false}
					multiple={multiple}
					accept={accept}
				>
					{fileList.length >= maxUploadCount ? null : uploadButton}
				</Upload>
				<Modal
					open={previewOpen}
					title={previewTitle}
					footer={null}
					onCancel={handleCancel}
				>
					<img
						alt="example"
						style={{
							width: "100%",
						}}
						src={previewImage}
					/>
				</Modal>
			</>
		</>
	);
};

export default AntUpload;
