"""
Demonstration of the GazeTracking library.
Check the README.md for complete documentation.
"""

import os, cv2
from .gaze_tracking.gaze_tracking import GazeTracking

def analyze_eye_tracking(File_Name):
    gaze = GazeTracking()
    # webcam = cv2.VideoCapture('hohoho.mkv')
    os.chdir('C:/Users/multicampus/Desktop/new/s03p23b107/frontend/src/assets/videos')
    webcam = cv2.VideoCapture(File_Name)
    # webcam = cv2.VideoCapture('blob')
    # webcam = cv2.VideoCapture(0)

    # webcam으로 쓰려면 0 넣을 것.
    time_gaze_directions = [0] * 4  # blink, right, left, center,
    # {
    #     'left': 0,
    #     'right': 0,
    #     'blinking': 0,
    #     'center': 0,
    # }

    while True: #(webcam.isOpened()):
        # We get a new frame from the webcam
        ret, frame = webcam.read()
            
        # We send this frame to GazeTracking to analyze it
        if type(frame) == type(None):
            break
        # if cv2.waitKey(1) & 0xFF == ord('q'):
        #     break
        gaze.refresh(frame)

        frame = gaze.annotated_frame()
        text = ""

        if gaze.is_blinking():
            text = "Blinking"
            time_gaze_directions[0] += 1
        elif gaze.is_right():
            text = "Looking right"
            time_gaze_directions[1] += 1
        elif gaze.is_left():
            text = "Looking left"
            time_gaze_directions[2] += 1
        elif gaze.is_center():
            time_gaze_directions[3] += 1
            text = "Looking center"

        cv2.putText(frame, text, (90, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)

        left_pupil = gaze.pupil_left_coords()
        right_pupil = gaze.pupil_right_coords()
        right_pupil = gaze.vertical_ratio()

        cv2.putText(frame, "Left pupil:  " + str(left_pupil), (90, 130), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)
        cv2.putText(frame, "Right pupil: " + str(right_pupil), (90, 165), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)

        cv2.imshow("Demo", frame)
        # # 동영상 보여주는 부분

        if cv2.waitKey(1) == 27:
            break

    print(time_gaze_directions)
    return time_gaze_directions