cmake_minimum_required (VERSION 3.5)

# set the project name and version
project(learnOpenGL VERSION 0.2)

# specify the C++ standard
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# add compiler flags
set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Werror")

# creates the variable EXEC and sets it to hello executable
set(EXEC learnOpenGL)

# header files
include_directories(include)

# puts all source files inside src to the SOURCES variable
file(GLOB SOURCES src/*)

# add linker flags
set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -lglfw -lGL -lX11 -lpthread -lXrandr -lXi -ldl")

# compiles the files defined by SOURCES to generante the executable defined by EXEC
add_executable(${EXEC} ${SOURCES}) 

# copy 'shaders' folder into 'build' directory
add_custom_command(TARGET ${EXEC} POST_BUILD
                   COMMAND ${CMAKE_COMMAND} -E copy_directory 
                   ${CMAKE_SOURCE_DIR}/shaders $<TARGET_FILE_DIR:${EXEC}>/shaders)
                   
