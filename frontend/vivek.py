import sys
from model_control.context import basic_context

data_to_pass_back = "vivek this to node process."
input = sys.argv[1]

# response=model.generate_content(f" {input}")


# model code
import google.generativeai as genai
import os
# import key
import PIL.Image

api_key= "AIzaSyBZVBw7t3ZQlbS_VtHOcWHoNX8NDatuMf0"

genai.configure(api_key=api_key)

model = genai.GenerativeModel('gemini-1.0-pro')

context = basic_context()
base_info = f"""
you are a smart chat-bot developed by team LearNet, if questions are asked beyond the given context as given here basic info:
{context}
you can reply 
with response that i am not smart enough to answer that, you can ask me questioins related to the site.
"""

response=model.generate_content(f" {input} just anwer the question inputed by the user and on point, {base_info}")

output = response.text 
print(output)
sys.stdout.flush()