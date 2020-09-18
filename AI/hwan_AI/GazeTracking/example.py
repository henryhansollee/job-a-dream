"""
Demonstration of the GazeTracking library.
Check the README.md for complete documentation.
"""

import cv2
from gaze_tracking import GazeTracking

gaze = GazeTracking()
# webcam = cv2.VideoCapture('gaze_test.mp4')
webcam = cv2.VideoCapture(0)

# webcam으로 쓰려면 0 넣을 것.
time_gaze_directions = [0] * 4  # blink, right, left, center,
# {
#     'left': 0,
#     'right': 0,
#     'blinking': 0,
#     'center': 0,
# }
time = 0
# while True:
while time <= 100:
    time += 1
    print(time)
    # We get a new frame from the webcam
    _, frame = webcam.read()

    # We send this frame to GazeTracking to analyze it
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
    # right_pupil = gaze.vertical_ratio()

    cv2.putText(frame, "Left pupil:  " + str(left_pupil), (90, 130), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)
    cv2.putText(frame, "Right pupil: " + str(right_pupil), (90, 165), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)

    cv2.imshow("Demo", frame)

    if cv2.waitKey(1) == 27:
        break

print(time_gaze_directions)
