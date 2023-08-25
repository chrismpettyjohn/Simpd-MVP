import { useState } from "react";
import { MEDIA_API_URL, LOCAL_STORAGE_SESSION_TOKEN } from "../app/app.constant";

export interface useMediaUploadResponse {
  onUpload(file: File): Promise<number>;
  loading: boolean;
}

const MEDIA_API = `${MEDIA_API_URL}/media`

export function useMediaUpload() {
  const [loading, setLoading] = useState(false);

  const onUpload = async (file: File) => {
    const bearerToken = localStorage.getItem(LOCAL_STORAGE_SESSION_TOKEN);

    if (loading) {
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch(MEDIA_API, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
        method: "POST",
        body: formData,
      });
      const responseBody = await response.json()
      return responseBody.id;
    } finally {
      setLoading(false);
    }
  }

  return {
    onUpload,
    loading,
  }
}