import sys

data_to_pass_back = "vivek this to node process."
input = sys.argv[1]

# response=model.generate_content(f" {input}")

output = input + "done"
print(output)
sys.stdout.flush()