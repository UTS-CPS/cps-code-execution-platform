export const LANGUAGES = {
  javascript: 63,
  typescript: 74,
  cpp: 54,
  c: 50,
  vb: 84,
  fsharp: 87,
  lua: 64,
  ruby: 72,
  R: 80,
  objectivec: 79,
  python: 71,
  java: 62,
  csharp: 51,
  php: 68
}

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("World");\n`,
  typescript: `type User = {\n\tname: string;\n\tage: number;\n}\n\nfunction displayUser(user: User) {\n\tconsole.log(\`Name: \${user.name}, Age: \${user.age}\`);\n}\n\ndisplayUser({ name: "Alice", age: 25 });\n`,
  cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n\tvector<int> numbers = {1, 2, 3, 4, 5};\n\tfor (int num : numbers) {\n\t\tcout << num << endl;\n\t}\n\treturn 0;\n}\n`,
  c: `#include <stdio.h>\n\nint main() {\n\tint numbers[] = {10, 20, 30};\n\tfor (int i = 0; i < 3; i++) {\n\t\tprintf("Number: %d\\n", numbers[i]);\n\t}\n\treturn 0;\n}\n`,
  vb: `Module Example\n\tSub Main()\n\t\tDim numbers As Integer() = {1, 2, 3, 4}\n\t\tFor Each num As Integer In numbers\n\t\t\tConsole.WriteLine($"{num}")\n\t\tNext\n\tEnd Sub\nEnd Module\n`,
  fsharp: `let numbers = [1; 2; 3; 4]\nnumbers |> List.iter (fun n -> printfn " %d" n)\n`,
  lua: `local numbers = {10, 20, 30}\nfor i, num in ipairs(numbers) do\n\tprint(" " .. num)\nend\n`,
  ruby: `numbers = [10, 20, 30]\nnumbers.each { |num| puts " #{num}" }\n`,
  R: `numbers <- c(10, 20, 30)\ncat("", numbers, "\\n")\n`,
  objectivec: `#import <Foundation/Foundation.h>\n\nint main(int argc, const char * argv[]) {\n\t@autoreleasepool {\n\t\tNSArray *numbers = @[@1, @2, @3];\n\t\tfor (NSNumber *num in numbers) {\n\t\t\tNSLog(@"Number: %@", num);\n\t\t}\n\t}\n\treturn 0;\n}\n`,
  python: `def greet(name):\n\tprint(f"Hello, {name}!")\n\ngreet("World")\n`,
  java: `import java.util.ArrayList;\n\npublic class Example {\n\tpublic static void main(String[] args) {\n\t\tArrayList<Integer> numbers = new ArrayList<>();\n\t\tnumbers.add(1);\n\t\tnumbers.add(2);\n\t\tnumbers.add(3);\n\t\tfor (int num : numbers) {\n\t\t\tSystem.out.println(num);\n\t\t}\n\t}\n}\n`,
  csharp: `using System;\nusing System.Collections.Generic;\n\nnamespace Example\n{\n\tclass Program {\n\t\tstatic void Main(string[] args) {\n\t\t\tList<int> numbers = new List<int> { 1, 2, 3, 4 };\n\t\t\tforeach (int num in numbers) {\n\t\t\t\tConsole.WriteLine($" {num}");\n\t\t\t}\n\t\t}\n\t}\n}\n`,
  php: `<?php\n\n$numbers = [10, 20, 30];\nforeach ($numbers as $num) {\n\techo "Number: $num\\n";\n}\n`
}
