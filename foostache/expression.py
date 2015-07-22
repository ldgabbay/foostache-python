# -*- coding: utf-8 -*-


class Expression(object):
    def eval(self, context):
        raise NotImplementedError()


class Exists(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsString(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsNumber(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsObject(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsArray(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsBoolean(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class IsNull(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class And(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class Or(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass


class Not(Expression):
    def __init__(self, path):
        if type(path) is not unicode:
            raise ValueError()
        self._path = path

    def eval(self, context):
        pass
