from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for white
    for item in datas:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    input_file = r"C:\Users\vedde\.gemini\antigravity\brain\47730893-25c5-435b-8c3e-3832c669aed5\media__1780823996391.png"
    output_file = r"d:\Projects\Infinty Layers - Site\src\assets\logo.png"
    remove_white_bg(input_file, output_file)
    print("Background removed and logo updated!")
