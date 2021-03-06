from flask import Flask, Response, request, render_template
import os
import composiai.Composer as cp

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/gettrack', methods=['GET', 'POST'])
def streamwav():
    notes = request.json["notes"]

    def generate():
        dir_path = os.path.dirname(os.path.realpath(__file__))
        print(os.listdir(dir_path))

        # harryPotterNotes = "-B,E,G,F#,E,B,A,F#, , ,E,G,F#,Eb,E,-B"
        myComposer = cp.Composer(notes, 5)

        myComposer.export_as_mp3("harry", os.path.join(dir_path, "output", ""),os.path.join("","app","vendor","ffmpeg","ffmpeg"))

        with open(os.path.join("output", "harry.mp3"), "rb") as fwav:
                data = fwav.read(1024)
                while data:
                    yield data
                    data = fwav.read(1024)
            #os.remove(os.path.join(dir_path, "output", "harry.wav"))
    return Response(generate(), mimetype="audio/mpeg")

        # ffmpeg mp3 generation code
        # /app/vendor/ffmpeg/ffmpeg

    #     myComposer.export_as_mp3("harry", os.path.join(dir_path, "output",""),"/app/vendor/ffmpeg/ffmpeg")

    #     with open(os.path.join("output", "harry.wav"), "rb") as fwav:
    #         data = fwav.read(1024)
    #         while data:
    #             yield data
    #             data = fwav.read(1024)
    #     #os.remove(os.path.join(dir_path, "output", "harry.wav"))
    # return Response(generate(), mimetype="audio/mpeg")


if __name__ == '__main__':
    app.run(debug=True)
