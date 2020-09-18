import cv2

def get_thumbnail(video, username):
    vidcap = cv2.VideoCapture('../media/%s' %video)
    if vidcap.isOpened():
        ret, image = vidcap.read()
        cv2.imwrite("../media/thumbnail/%d_thumb.jpg" %username, image)
        print('Saved successfully')
        print(username)

        vidcap.release()

# get_thumbnail('메인페이지', '1')

# def get_thumbnail(videoname, username):
#     vidcap = cv2.VideoCapture('../media/thumbnail/%s.mp4' %videoname)
#     if vidcap.isOpened():
#         ret, image = vidcap.read()
#         try:
#             ext = os.path.splitext(videoname)[1]
#             result, n = cv2.imencode(ext, image, None)

#             if result:
#                 with open(videoname, mode='w+b') as f:
#                     n.tofile(f)
#         # cv2.imwrite('../media/thumbnail/%s_%s2.jpg'%(username, videoname), image)
#         # print(type(image))

#     vidcap.release()

# get_thumbnail("test", "보근")