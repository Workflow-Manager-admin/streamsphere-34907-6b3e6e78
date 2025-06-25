#!/bin/bash
cd /home/kavia/workspace/code-generation/streamsphere-34907-6b3e6e78/youtube_clone_frontend_workspace/youtube_clone_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

