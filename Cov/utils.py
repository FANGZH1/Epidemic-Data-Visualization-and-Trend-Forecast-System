import pymysql


def get_conn():
    conn = pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="password",
        db="epidemic",
        charset="utf8"
    )
    cursor = conn.cursor()
    return conn, cursor


def close_conn(conn, cursor):
    cursor.close()
    conn.close()


def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


def get_c1_chinadataIncr():
    sql = "select sum(confirmedIncr)," \
          " sum(suspectedCount)," \
          " sum(curedIncr)," \
          " sum(deadIncr)"\
          " from china_provincedata " \
          " where dateId =(select dateId from china_provincedata order by dateId desc limit 1)"
    res = query(sql)
    return res[0]


def get_c1_chinadataCount():
    sql = "select sum(currentConfirmedCount)," \
          " sum(confirmedCount)," \
          " sum(curedCount)," \
          " sum(deadCount)"\
          " from china_provincedata " \
          " where dateId =(select dateId from china_provincedata order by dateId desc limit 1)"
    res = query(sql)
    return res[0]


def get_c1_worlddata():
    sql = "select currentConfirmedCount," \
           "confirmedIncr," \
           "curedCount," \
           "deadCount " \
           "from world_total_data " \
           "where dateId =(select dateId from world_total_data order by dateId desc limit 1)"
    res = query(sql)
    return res[0]


def get_c2_data():
    sql = "select provinceShortName," \
          "confirmedCount," \
          "curedCount," \
          "deadCount " \
          "from china_provincedata " \
          "where dateId= (select dateId from china_provincedata order by dateId desc limit 1) "\
          "group by provinceShortName,confirmedCount,curedCount,deadCount"
    res = query(sql)
    return res


def get_l1_data():
    sql = "select dateId,sum(confirmedIncr),sum(deadIncr),sum(curedIncr) " \
          "from china_provincedata " \
          "where dateId >= '20220101' " \
          "group by dateId " \
          "order by dateId"
    res = query(sql)
    return res


def get_r1_data():
    sql = "select dateId,sum(confirmedCount),sum(deadCount),sum(curedCount) " \
          "from china_provincedata " \
          "where dateId >= '20220101' " \
          "group by dateId " \
          "order by dateId"
    res = query(sql)
    return res


def get_r2_fitdata():
    sql = "select dateId,confirmedCountPred,confirmedTrueData,confirmedIncrPred,confirmedIncrTrueData " \
          "from china_predict " \
          "where id<816 " \
          "order by dateId"
    res = query(sql)
    return res

def get_r2_preddata():
    sql = "select dateId,confirmedTrueData " \
          "from china_predict " \
          "where id>815 " \
          "order by dateId"
    res = query(sql)
    return res

def get_l3_data():
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select dt, content " \
          "from hotsearch " \
          "where dt=(select dt " \
          "from hotsearch " \
          "order by dt desc limit 1) "
    res = query(sql)
    return res

def get_l2_data():
    # 因为会更新多次数据，取时间戳最新的那组数据
    sql = "select end_update_time,province,city,county,address,type" \
          " from risk_area " \
          "where end_update_time=(select end_update_time " \
          "from risk_area " \
          "order by end_update_time desc limit 1) "
    res = query(sql)
    return res


if __name__ == "__main__":
    print(get_c2_data())
    print(get_l1_data())
    print(get_c1_chinadataIncr())
    print(get_c1_worlddata())
    print(get_r2_fitdata())

