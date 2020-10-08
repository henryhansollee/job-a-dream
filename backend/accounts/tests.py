import os, sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))

from AI.AI_code.STT_API_version import transcribe_file
# Create your tests here.

transcribe_file('녹음.wav')