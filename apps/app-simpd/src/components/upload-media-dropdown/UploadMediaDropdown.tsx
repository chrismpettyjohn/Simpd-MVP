import { createPortal } from 'react-dom';
import { Button, Dropdown, Space } from 'antd';
import React, { ChangeEvent, useMemo, useRef } from 'react';
import { UploadMediaDropdownProps } from './UploadMediaDropdown.types';

const UPLOAD_NEW_MEDIA_KEY = 'upload-new-media';

export function UploadMediaDropdown({ files, onAddFile, onRemoveFile }: UploadMediaDropdownProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddNewMedia = () => {
    inputRef.current?.click();
  }

  const onUploadMedia = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newFile: File = e.target.files![0];

    if (!newFile) {
      return;
    }

    onAddFile(newFile);
  }

  const menuItems = useMemo(() => {
    return [
      ...files.map((_, i) => ({
        key: `file-${i}`,
        label: <div>{_.name}</div>
      })),
      {
        key: UPLOAD_NEW_MEDIA_KEY,
        label: <div onClick={onAddNewMedia} style={{ cursor: 'pointer' }}>Add Media</div>
      }
    ];
  }, [files]);

  return (
    <>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown menu={{ items: menuItems }} placement="bottomLeft">
            <Button>
              <i className="fa fa-images" style={{ marginRight: 4 }} />
              Media
            </Button>
          </Dropdown>
        </Space>
      </Space>
      {createPortal(<input style={{ visibility: 'hidden' }} type="file" onChange={onUploadMedia} ref={inputRef} />, document.body)}
    </>
  )
}